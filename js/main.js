// Fix Mobile Button Issue 
document.querySelector('.btn-mobile').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const mobileText = getTextById('mobile-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${mobileText} at ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);

})

// Add Dark Mode 
document.querySelector('.btn-dark').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const darkText = getTextById('dark-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${darkText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);
})


// Optimize Home page 
document.querySelector('.btn-optimize').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const optimizeText = getTextById('optimize-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${optimizeText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);
})


// Add new emoji 🤲 
document.querySelector('.btn-emoji').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const emojiText = getTextById('emoji-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${emojiText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);
})

// Integrate OpenAI API 
document.querySelector('.btn-ai').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const aiText = getTextById('ai-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${aiText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);
})

// Improve Job Seeking 
document.querySelector('.btn-job').addEventListener('click', function () {
    const pendingTask = getTextValueById('pending-task');
    const completedTask = getTextValueById('completed-task');
    const totalCompletedTask = completedTask + 1;
    const remainTask = pendingTask - 1;
    document.getElementById('completed-task').innerText = totalCompletedTask;
    document.getElementById('pending-task').innerText = remainTask;
    alert('Board Updated Successfully');
    const jobText = getTextById('job-text');
    const newHistory = document.querySelector('.new-history');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bg-[#3752FD33] px-2 py-3 rounded-md">
    <p class="text-sm">You have Complete The Task: ${jobText} ${getFormattedTime()}</p> </div>
    `;
    newHistory.appendChild(newDiv);

})



// New History 


