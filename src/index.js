"use strict# {


//追加ボタン
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  div.appendChild(li);
  console.log(div);

  //ボタンの追加
  const conpleteButton = document.createElement("button");
  conpleteButton.innerText = "完了";
  div.appendChild(conpleteButton);
  //完了ボタンのクリックイベント
  conpleteButton.addEventListener("click", () => {
    deleteFormIncompleteList(conpleteButton.parentNode);
    const addTarget = conpleteButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //戻すボタンを押したときの処理
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("conplete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("conplete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  div.appendChild(deleteButton);
  //削除ボタンのクリックイベント
  deleteButton.addEventListener("click", () => {
    deleteFormIncompleteList(deleteButton.parentNode);
  });

  document.getElementById("imconplete-list").appendChild(div);
};

const deleteFormIncompleteList = (target) => {
  document.getElementById("imconplete-list").removeChild(target);
};

const inputButton = document.getElementById("inputButton");
inputButton.addEventListener("click", () => {
  onClickAdd();
});

}
