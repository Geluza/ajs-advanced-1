// const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

export default function orderByProps(obj, arrOrder) {
  let arrKey = [];
  for (const key in obj) {
    if (arrOrder.indexOf(key) === -1) {
      arrKey.push(key);
    }
  }

  arrKey = [...arrOrder, ...arrKey.sort()];
  const resultArr = [];
  for (const key of arrKey) {
    resultArr.push({ key, value: obj[key] });
  }
  return resultArr;
}
