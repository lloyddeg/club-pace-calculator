document.addEventListener('DOMContentLoaded', e => {
    console.log("ayo");

    const calcForm = document.getElementById('calcForm');
    const results = document.getElementById('results');
    const resultTemplate = document.getElementById('resultTemplate');

    calcForm.addEventListener('submit', e => {
        e.preventDefault();

        //get the time given and convert it to a time (in seconds)
        const hours = parseInt(calcForm.hours.value);
        const minutes = parseInt(calcForm.minutes.value);
        const seconds = parseInt(calcForm.seconds.value);

        const timeValue = (hours * 60 * 60)  + (minutes * 60) + seconds;
        const timeString = hours + ":" + minutes + ":" + seconds;


        //create a result
        let resultInstance = resultTemplate.content.cloneNode(true);

        //get its inside values
        let givenTime = resultInstance.getElementById('givenTime');
        let lacticTime = resultInstance.getElementById('lacticTime');
        let movinTime = resultInstance.getElementById('movinTime');
        let steadyTime = resultInstance.getElementById('steadyTime');
        let enduranceTime = resultInstance.getElementById('enduranceTime');

        //populate
        givenTime.innerHTML = timeString;
        

        results.append(resultInstance);
    })
})
