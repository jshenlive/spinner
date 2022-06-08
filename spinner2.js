const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let timer = 100, i = 0; timer <= 2000; timer += 200, i++) {
  setTimeout(() => {
    process.stdout.write(arr[i % 4]);
  }, timer);
}

  // setTimeout(() => {
  //   process.stdout.write('\r/   ');
  // }, timer + 200);

  // setTimeout(() => {
  //   process.stdout.write('\r-   ');
  // }, timer + 400);

  // setTimeout(() => {
  //   // Need to escape the backslash since it's a special character.
  //   process.stdout.write('\r\\   ');
  // }, timer + 600);
// }

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1200);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 1400);
