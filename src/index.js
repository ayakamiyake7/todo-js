import "./styles.css";

const onClickAdd = () => {
  //to get value of textbox.
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);

  // delete from incomplete area
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  // function (add to incomplete function)
  const createIncompleteList = (text) => {
    //creating div
    const div = document.createElement("div");
    div.className = "list-row";

    //creating li
    const li = document.createElement("li");
    li.innerText = text;

    //creating complete button
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      // delete elements
      deleteFromIncompleteList(completeButton.parentNode);
      // add elements
      const addTarget = completeButton.parentNode;
      const text = addTarget.firstElementChild.innerText;

      addTarget.textContent = null;
      const li = document.createElement("li");
      li.innerText = text;

      //back button
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      backButton.addEventListener("click", () => {
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
        // get text
        const text = backButton.parentNode.firstElementChild.innerText;
        console.log(text);
      });

      // set elements under the div
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);

      document.getElementById("complete-list").appendChild(addTarget);
    });

    //creating delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      // delete elements
      deleteFromIncompleteList(deleteButton.parentNode);
    });

    // set elements under the div
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(div);
  };
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
