export interface GraphData {
  date: string;
  count: number;
}

export interface ITaskStatusGraph {
  data: GraphData[];
}

export interface taskDoneData {
  x: number;
  y: number;
}
