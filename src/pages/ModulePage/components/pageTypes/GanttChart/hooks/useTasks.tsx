import React, { useContext, useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { MdAdd } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdExpandMore } from "react-icons/md";
import IconButton from "../../../../../../components/buttons/IconButton/IconButton";
import { LuPencilLine } from "react-icons/lu";
import { useInstantStore } from "../../../../../../store/instantStore";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { getIdValueFromObject } from "../../../../../../services/functions/helpers/getIdValueFromObject";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { findNextWorkDay } from "../helpers/findNextWorkDay";
import { findEndDate } from "../helpers/findEndDate";
import { calculateOrder } from "../helpers/calculateOrder";
import { convertDateObjectToString, convertTimeToShow, isoDateFormat } from "services/functions/helpers/dateHelpers";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { TDocument, TconfigPage, obj } from "types/types";
import { pageIds } from "consts/config/pages/pages";
import { ganttChartQueueFactor } from "pages/ModulePage/consts";
import { OrderedTask, TaskType } from "modified_modules/gantt-task-react/dist/types/public-types";
import { getValueOfDate } from "../helpers/getValueOfDate";
import useGetProperties from "hooks/useGetProperties";
import { usePageStore } from "store/pageStore";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export type ExtendedTask = OrderedTask & TDocument;

interface ITaskListColumn {
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: ExtendedTask[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
}

interface ITaskListHeader {
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}

const colors = [
  "rgb(204, 0, 0)",
  "rgb(102, 204, 0)",
  "rgb(0, 0, 204)",
  "rgb(204, 204, 0)",
  "rgb(0, 204, 204)",
  "rgb(204, 0, 204)",
  "rgb(204, 102, 0)",
  "rgb(0, 204, 102)",
  "rgb(96, 96, 96)",
];

const emptyTasks: ExtendedTask = {
  start: new Date(),
  end: new Date(),
  name: "empty",
  id: "id",
  type: "task" as TaskType,
  progress: 0,
  order: 0,
  amount_of_days: 0,
};

export const useTasks = (
  currentPage: TconfigPage,
  handleChangeButton: (row: TDocument) => void,
  handleOpenConfirmationDialog: () => void,
  handleAddButton: (item: obj) => void,
  styles: obj
) => {
  const instantStore = useInstantStore();
  const pageStore = usePageStore();

  const bucketId = currentPage._id;

  const { handleMultipleUpdate } = useDataMethods();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const { getFieldFeatures } = useGetProperties();

  const convertTasksToShow = (tasks: TDocument[], teams: TDocument[]): ExtendedTask[] =>
    tasks
      .map((row) => {
        const project = getPageDocument({ pageId: pageIds.Projects, documentId: getIdValueFromObject(row.unit?.project) }) || {};
        const productSerialNumber = row.unit?.serial_number;

        const name = project?.name + ", " + (productSerialNumber?.length > 40 ? productSerialNumber?.slice(0, 40) + "..." : productSerialNumber);

        const order = calculateOrder(row, teams, currentPage.title === "MaintenancePlanning" ? "employee" : "field_team");

        const end = new Date(findEndDate(row.start_date, row.amount_of_days));

        const progressColor = "rgba(255, 255, 255, 0.5)";
        const backgroundColor = colors[Math.floor(order / ganttChartQueueFactor) % colors.length];

        return {
          ...row,
          id: row._id!,
          name,
          type: "task" as TaskType,
          order,
          start: row.start_date ? new Date(row.start_date) : new Date(),
          end,
          progress: row.progress || 0,
          dependencies: row.dependencies || [],
          amount_of_days: row.amount_of_days || 0,
          styles: { progressColor, backgroundColor },
        };
      })
      .sort((a, b) => a.order - b.order);

  const convertTeamsToShow = (teams: TDocument[], primary: string): ExtendedTask[] =>
    teams.map((team, i) => ({
      ...team,
      id: team._id!,
      name: team[primary],
      type: "project",
      order: (i + 1) * ganttChartQueueFactor,
      start: new Date(),
      end: new Date(),
      progress: 0,
      amount_of_days: 0,
    }));

  const fieldFeatures = getFieldFeatures(currentPage.title);
  const ganttChartTeam = Object.keys(fieldFeatures).find((feature) => fieldFeatures[feature].is_gantt_chart_team) || "";

  const properties = pageStore.pageBuckets[currentPage._id].properties;
  const teamBucket = properties[ganttChartTeam];

  const fieldTeams = getPageDocuments({ pageId: teamBucket.bucketId, section: "exist" });
  const filteredTeams = currentPage.title === "MaintenancePlanning" ? fieldTeams.filter((team) => team.department === "Bakım") : fieldTeams;

  const teams: ExtendedTask[] = convertTeamsToShow(filteredTeams, teamBucket.primary!);

  const rows = getPageDocuments({ pageId: "current", section: "exist" });
  const tasks: ExtendedTask[] = convertTasksToShow(rows, fieldTeams);

  const allContent = [...teams, ...tasks];

  const isEmptyContent = !allContent.length;

  const [prevAllContent, setPrevAllContent] = useState(allContent);

  const [content, _setContent] = useState<ExtendedTask[]>(isEmptyContent ? [emptyTasks] : teams.sort((a, b) => a.order - b.order));
  const setContent = (newContent: ExtendedTask[]) => _setContent(newContent.sort((a, b) => a.order - b.order));

  const updateContent = () => {
    const prevAllContentIds = prevAllContent.map((item) => getIdValueFromObject(item));
    const contentIds = content.map((item) => getIdValueFromObject(item));

    const newContent = allContent.filter((item) => {
      const itemId = getIdValueFromObject(item);
      const isNotChangedItem = prevAllContentIds.includes(itemId) && contentIds.includes(itemId);
      const isNewItem = !prevAllContentIds.includes(itemId) && !contentIds.includes(itemId);
      return isNotChangedItem || isNewItem;
    });

    setContent(newContent);
    setPrevAllContent([...allContent]);
  };

  useEffect(updateContent, [rows]);

  const [itemForReplace, setItemForReplace] = useState<ExtendedTask | undefined>();

  const columnDivRef = useRef(null);

  const projectIconStyle = (team: ExtendedTask) => ({
    cursor: "pointer",
    marginTop: "2px",
    rotate: isTeamExpanded(team) ? "0deg" : "-90deg",
    minWidth: "16px",
    minHeight: "16px",
  });

  const isTeamExpanded = (team: ExtendedTask) => content.some((task) => getIdValueFromObject(task[teamBucket.title!]) == getIdValueFromObject(team));

  const handleExpandIconClick = (team: ExtendedTask) => {
    let newContent = [];
    if (isTeamExpanded(team)) {
      newContent = content.filter((task) => getIdValueFromObject(task[teamBucket.title!]) != getIdValueFromObject(team));
    } else {
      newContent = [...content, ...tasks.filter((task) => getIdValueFromObject(task[teamBucket.title!]) == getIdValueFromObject(team))];
    }

    setContent(newContent);
  };

  const haveExpandedTeam = teams.some((team) => isTeamExpanded(team));

  const expandeAllProjectsIconStyle = {
    width: "20px",
    height: "20px",
    cursor: "pointer",
    rotate: haveExpandedTeam ? "0deg" : "-90deg",
  };

  const handleExpandAll = () => (haveExpandedTeam ? setContent(teams) : setContent([...teams, ...tasks]));

  const handleBeforeUpdateContent = () => setPrevAllContent([...allContent]);

  const getPrevItem = (task: ExtendedTask): ExtendedTask | undefined => {
    const taskIndex = content.findIndex((item) => getIdValueFromObject(item) === getIdValueFromObject(task));
    const prevIndex = taskIndex - 1;
    if (prevIndex < 0) return;
    return content[prevIndex];
  };

  const isFirstTask = (task: ExtendedTask) => {
    const prevItem = getPrevItem(task);
    const isPrevItemTeam = prevItem?.type === "project";
    return isPrevItemTeam;
  };

  const handleReplace = async (item: ExtendedTask) => {
    if (!itemForReplace) return;

    if (item._id === itemForReplace._id) {
      setItemForReplace(undefined);
      return;
    }

    const firstItem = item.order > itemForReplace.order ? itemForReplace : item;
    const secondItem = item.order > itemForReplace.order ? item : itemForReplace;

    const currentTeamItems = content.filter((row) => getIdValueFromObject(row[teamBucket.title!]) === getIdValueFromObject(firstItem[teamBucket.title!]));

    const nextItems = currentTeamItems.filter((row) => row.order > firstItem.order);

    const updatedNextItems = nextItems.map((item, index) => {
      if (item._id === secondItem._id) {
        const dependsOnItself = secondItem.dependencies?.[0] === firstItem._id;
        const dependencies = dependsOnItself ? [`${secondItem._id}`] : secondItem.dependencies;

        return { ...firstItem, start_date: secondItem.start_date, dependencies };
      }

      if (index === 0) {
        return { ...item, dependencies: item.dependencies?.length ? [`${secondItem._id}`] : [] };
      }

      if (item.dependencies?.[0] === secondItem._id) {
        return { ...item, dependencies: [`${firstItem._id}`] };
      }

      return item;
    });

    const initialItem = { ...secondItem, start_date: firstItem.start_date, dependencies: firstItem.dependencies };

    const newNextItems = updatedNextItems.reduce<ExtendedTask[]>((acc, item, index) => {
      const prevItem = index === 0 ? initialItem : acc[index - 1];

      const prevEnd = findEndDate(prevItem.start_date, prevItem.amount_of_days);
      const prevEndValue = getValueOfDate(prevEnd);

      const startValue = getValueOfDate(item.start_date);

      if (prevEndValue >= startValue || item.dependencies?.length) {
        const updatedItem = { ...item, start_date: findNextWorkDay(prevEnd) };
        acc.push(updatedItem);
      } else {
        acc.push(item);
      }

      return acc;
    }, []);

    handleMultipleUpdate({ documents: [initialItem, ...newNextItems] });

    setItemForReplace(undefined);
  };

  const handleAddDependencies = (item: ExtendedTask) => {
    const prevTask = getPrevItem(item);
    if (!prevTask) return;

    const newTask: TDocument = { ...item };
    newTask.dependencies = [`${prevTask._id}`];
    newTask.start_date = findNextWorkDay(prevTask.end);

    const pageData = getPageDocuments({ pageId: bucketId, section: "exist" });

    let currentPrevTask = { ...newTask };
    let newNextTasks: TDocument[] = [];

    for (let index = 0; index < 1000; index++) {
      const dependentTask = pageData.find((row) => row.dependencies?.[0] === currentPrevTask._id);
      if (!dependentTask) break;

      const newDependentTask: TDocument = { ...dependentTask };
      const prevTaskEndDate = findEndDate(currentPrevTask.start_date, currentPrevTask.amount_of_days);
      newDependentTask.start_date = findNextWorkDay(prevTaskEndDate);

      newNextTasks.push(newDependentTask);

      currentPrevTask = { ...newDependentTask };
    }

    handleMultipleUpdate({ documents: [newTask, ...newNextTasks] });
  };

  const isErrorContent = content.length === 0 || content[0]?.name === undefined || content[0]?.name === "empty";

  const TaskListColumn: React.FC<ITaskListColumn> = ({ tasks }: { tasks: ExtendedTask[] }) => {
    return (
      <div className={styles["column"]} key={0} ref={columnDivRef}>
        {isErrorContent ? (
          <div className={styles["empty"]}></div>
        ) : (
          tasks.map((item: ExtendedTask, index: number) => {
            return (
              <Grid key={index} container spacing={2} className={styles["column-grid"]}>
                <Grid item xs={3.8}>
                  {item.type === "project" ? (
                    <div style={{ display: "flex" }}>
                      <MdExpandMore style={projectIconStyle(item)} onClick={() => handleExpandIconClick(item)} />
                      <label
                        style={{ paddingLeft: "2px", fontWeight: "500", cursor: "pointer", maxWidth: "130px", overflow: "hidden" }}
                        onClick={() => handleExpandIconClick(item)}
                      >
                        {item.name}
                      </label>
                      <div
                        style={{
                          marginLeft: "5px",
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          background: colors[(item.order / ganttChartQueueFactor) % 9],
                        }}
                      ></div>
                    </div>
                  ) : (
                    <label>{item.name}</label>
                  )}
                </Grid>
                <Grid item xs={1.9} style={{ marginLeft: "10px" }}>
                  {item.type === "project" ? "" : convertTimeToShow(convertDateObjectToString(item.start), { dateOnly: true })}
                  <br />
                  {item.type === "project" ? "" : convertTimeToShow(convertDateObjectToString(item.end), { dateOnly: true })}
                </Grid>
                <Grid item xs={0.55}>
                  {item.type === "task" ? (
                    <IconButton
                      onClick={() => {
                        handleChangeButton(getPageDocument({ pageId: bucketId, documentId: item._id! }) || {});
                        handleBeforeUpdateContent();
                      }}
                    >
                      <LuPencilLine style={{ width: "15px", height: "15px" }} />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => {
                        handleAddButton(item);
                        handleBeforeUpdateContent();
                      }}
                    >
                      <MdAdd style={{ width: "15px", height: "15px" }} />
                    </IconButton>
                  )}
                </Grid>
                <Grid item xs={0.55}>
                  {item.type === "task" && (
                    <IconButton
                      onClick={() => {
                        handleOpenConfirmationDialog();
                        instantStore.setSelectedRow(item);
                        handleBeforeUpdateContent();
                      }}
                    >
                      <RiDeleteBinLine style={{ width: "15px", height: "15px" }} />
                    </IconButton>
                  )}
                </Grid>
                <Grid item xs={0.55}>
                  {item.type === "task" ? (
                    itemForReplace && Object.keys(itemForReplace).length ? (
                      getIdValueFromObject(item[teamBucket.title!]) === getIdValueFromObject(itemForReplace[teamBucket.title!]) && (
                        <IconButton onClick={() => handleReplace(item)}>
                          {item.id === itemForReplace.id ? (
                            <CloseIcon style={{ width: "20px", height: "20px", marginLeft: "-2px" }} />
                          ) : (
                            <PublishedWithChangesOutlinedIcon style={{ width: "18px", height: "18px" }} />
                          )}
                        </IconButton>
                      )
                    ) : (
                      <IconButton
                        onClick={() => {
                          setItemForReplace(item);
                        }}
                      >
                        <ChangeCircleOutlinedIcon style={{ width: "18px", height: "18px" }} />
                      </IconButton>
                    )
                  ) : (
                    <div></div>
                  )}
                </Grid>
                <Grid item xs={0.55}>
                  {item.type === "task" && (!item.dependencies || item.dependencies?.length === 0) && !isFirstTask(item) && (
                    <IconButton onClick={() => handleAddDependencies(item)}>
                      <VerticalAlignTopIcon style={{ width: "20px", height: "20px", rotate: "-90deg" }} />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            );
          })
        )}
      </div>
    );
  };

  const TaskListHeader: React.FC<ITaskListHeader> = () => {
    return (
      <div className={styles[instantStore.hideSidebar ? "header-fullScreen" : "header"]}>
        <Grid container spacing={2} style={{ width: 600, marginTop: 6 }}>
          <Grid item xs={0.8}>
            {!isEmptyContent && <MdExpandMore style={expandeAllProjectsIconStyle} onClick={handleExpandAll} />}
          </Grid>
          <Grid item xs={3}>
            Adı
          </Grid>
          <Grid item xs={2.1}>
            Başlangıç - Bitiş:
          </Grid>
        </Grid>
      </div>
    );
  };

  return { content, TaskListColumn, TaskListHeader };
};
