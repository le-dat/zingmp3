export interface WeekChartIProps {
  country: string;
  items: any[]
}

export interface ChartIProps {
  items: any;
  times: Array<{ hour: string | number }>;
}

export interface RTChartIProps {
  chart: ChartIProps;
  items: any[]
  promotes?: any[]
}

export interface LineChartIProps {
  chart: ChartIProps;
  customClass?: string;
  items?: any[]
}
