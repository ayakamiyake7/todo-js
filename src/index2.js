// 追加ボタンを押す
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liを作る
  const li = document.createElement("li");

  // divを作る
  const div = document.createElement("div");
  div.className = "list-row";

  // pを作る
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // 完了ボタンを作成
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  buttonComplete.addEventListener("click", () => {
    const moveTarget = buttonComplete.closest("li");
    buttonComplete.nextElementSibling.remove(); // 削除ぼたん消す
    buttonComplete.remove();
    // 戻すボタンを生成してdivタグは以下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    moveTarget.firstElementChild.appendChild(backButton);
    // 完了エリアに移動
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  // 削除ボタンを作成
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";
  buttonDelete.addEventListener("click", () => {
    // 押された削除ボタンのliを削除
    const deleteTarget = buttonDelete.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    console.log(deleteTarget);
  });

  // divの中に要素を入れる
  div.appendChild(p);
  li.appendChild(div);

  div.appendChild(buttonComplete);
  div.appendChild(buttonDelete);

  // incomplete-listの下に入れる
  document.getElementById("incomplete-list").appendChild(li);
};

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", onClickAdd);
