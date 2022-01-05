const list = [];

list.push({ id: "1", name: "atanu", count: 0 });
list.push({ id: "2", name: "ani", count: 0 });

var newl = list.filter((val) => {
  //   if (val.id === "1") {
  //     val.count++;
  //   }
  return val.count != 0;
});
console.log(newl);
