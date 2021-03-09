const spinAnimation = time => {
  const obj = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  let count = 0;
  for (let i = 100; i < time; i += 200) {
    setTimeout(() => {
      process.stdout.write(obj[count]);
      count === 3 ? count = 0 : count++;
    }, i);
  }
};

spinAnimation(10000);