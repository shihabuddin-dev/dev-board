// Fix Mobile Button Issue 
document.querySelector('.btn-mobile').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
})

// Add Dark Mode 
document.querySelector('.btn-dark').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
})


// Optimize Home page 
document.querySelector('.btn-optimize').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
})


// Add new emoji 🤲 
document.querySelector('.btn-emoji').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
})

// Integrate OpenAI API 
document.querySelector('.btn-ai').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
})

// Improve Job Seeking 
document.querySelector('.btn-job').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
})