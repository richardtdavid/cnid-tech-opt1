export const getAppHealth = (): AppHealth => {
  const health: AppHealth = {
    project: "news api server",
    msg: "news api server running...",
    time: Date.now(),
    status: 200,
  };
  return health;
};

export type AppHealth = {
  project: string;
  msg: string;
  time: number;
  status: number;
};
