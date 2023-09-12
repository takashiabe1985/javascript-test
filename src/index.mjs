import './styles.css';

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
        
    createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}
const createIncompleteList = (text) => {
    const li = document.createElement("li");

    //divタグ生成
    const div = document.createElement("div");
    div.className = "list-row";
   
    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;



    //done buttonタグ生成
    const doneButton = document.createElement("button");
    doneButton.innerText = "done";

    //doneボタン　クリック実行
    doneButton.addEventListener("click", () => {

        const addTarget = doneButton.parentNode;
        
        const text = addTarget.firstElementChild.innerText;
        addTarget.textContent = null;

        
        //ulタグからliタグ要素を削除
        deleteFromIncompleteList(li);

       
        
        const addLi = document.createElement("li");



        const div = document.createElement("div");
        div.className = "list-row";


        const p = document.createElement("p");
        p.innerText = text;

        //完了タスクのback buttonタグ生成
        const backButton = document.createElement("button");
        backButton.innerText = "back";
        backButton.addEventListener("click", () => {

            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);
            
            
            // const text = deleteTarget.firstElementChild.innerText;
        
            createIncompleteList(text);
           
        });
     
        //完了タスクのdelete buttonタグ生成
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "delete";
        deleteButton.addEventListener("click", () => {

            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);
            
           
        });


        //完了タスク側のulタグ配下に生成する要素を構成
        addTarget.appendChild(addLi);
        addTarget.appendChild(div);
        addTarget.appendChild(p);
        addTarget.appendChild(backButton);
        addTarget.appendChild(deleteButton);

        //完了タスク側のulタグ配下に要素を生成
        document.getElementById("complete-list").appendChild(addTarget);
                
    });

    //delete buttonタグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
        deleteFromIncompleteList(li);
    });

    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(doneButton);
    div.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(li);

}

document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());


