function loadJobs() {
    fetch('jobs.json')
        .then(response => response.json())
        .then(data => {
            const jobList = document.getElementById('job-list');
            jobList.innerHTML = ''; // Clear any existing job cards

            data.forEach((job, index) => {
                const jobCard = document.createElement('div');
                jobCard.className = 'job-card';
                jobCard.innerHTML = `
                    <h3>${job.title}</h3>
                    <p>${job.company}</p>
                    <p>Pay: ${job.salaryRange}</p>
                `;
                jobCard.onclick = () => showJobDetails(data, index);
                jobList.appendChild(jobCard);
            });
        });
}

function showJobDetails(data, index) {
    const jobDetails = document.getElementById('job-details');
    const job = data[index];

    jobDetails.innerHTML = `
        <h2>${job.title}</h2>
        <h3>${job.company}</h3>
        <p>Pay Range: ${job.pay}</p>
        <h4>Description:</h4>
        <p>${job.description}</p>
    `;
}

// Load jobs on page load
window.onload = loadJobs;
