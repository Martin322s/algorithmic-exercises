function solve() {
    const addButton = document.getElementById('add');
    const taskInputField = document.getElementById('task');
    const descriptionInputField = document.getElementById('description');
    const dateInputField = document.getElementById('date');
    const openTasksSection = document.querySelector('main section:nth-of-type(2) > div:nth-of-type(2)');
    const inProgressTasksSection = document.querySelector('main section:nth-of-type(3) > div:nth-of-type(2)');
    const doneTasksSection = document.querySelector('main section:nth-of-type(4) > div:nth-of-type(2)');

    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();

        let inputData = {
            task: taskInputField.value,
            description: descriptionInputField.value,
            date: dateInputField.value,
        };

        if (Object.values(inputData).some(x => x === '')) {
            alert('All fields are required!');
        } else {
            let articleElement = document.createElement('article');
            let headingElement = document.createElement('h3');
            let descriptionElement = document.createElement('p');
            let dateElement = document.createElement('p');
            let divButtons = document.createElement('div');
            let startButton = document.createElement('button');
            let deleteButton = document.createElement('button');

            divButtons.classList.add('flex');
            startButton.classList.add('green');
            deleteButton.classList.add('red');

            headingElement.textContent = inputData.task;
            descriptionElement.textContent = `Description: ${inputData.description}`;
            dateElement.textContent = `Due Date: ${inputData.date}`;
            startButton.textContent = 'Start';
            deleteButton.textContent = 'Delete';

            divButtons.appendChild(startButton);
            divButtons.appendChild(deleteButton);
            articleElement.appendChild(headingElement);
            articleElement.appendChild(descriptionElement);
            articleElement.appendChild(dateElement);
            articleElement.appendChild(divButtons);
            openTasksSection.appendChild(articleElement);

            taskInputField.value = '';
            descriptionInputField.value = '';
            dateInputField.value = '';
        }
    });
}