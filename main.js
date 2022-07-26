function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EqSOAAuDR/model.json", modelready);
}

function modelready()
{
    classifier.classify(gotresults);
}  

function gotresults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='I Can Hear: ' + results[0].label;
        document.getElementById("result_accuracy").innerHTML='Accuracy: ' + (results[0].confidence * 100).toFixed(2)+" % ";

        document.getElementById("result_label").style.color="rgb("+ r + "," + g + "," + b + ")";
        document.getElementById("result_accuracy").style.color="rgb("+ r + "," + g + "," + b + ")";
        
        img1 = document.getElementById("ear1");

        if (results[0].label=="meow")
        {
            img1.src="download(1).jfif";
        }

        if (results[0].label=="bark")
        {
            img1.src="download.jfif";
        }
        if (results[0].label=="roar")
        {
            img1.src="download(2).jfif";
        }
        else 
        {
            img1.src="ear-icon-png-26";
        }
    
    }
}