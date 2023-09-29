function delay(time: number): Promise<void> {
  return new Promise<void>(function (resolve) {
    setTimeout(resolve, time);
  });
}

export { delay };
