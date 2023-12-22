const questions = [
    {
      question: "¿Cuál es el nombre del protagonista de GTA 5?",
      options: ["Michael De Santa", "Trevor Philips", "Franklin Clinton"],
      answer: "Michael De Santa",
      image: "https://www.10wallpaper.com/wallpaper/medium/1309/trevor_franklin_michael-Grand_Theft_Auto_V_GTA_5_Game_HD_Wallpaper_medium.jpg" 
    },
    {
      question: "¿Qué actor prestó su voz y apariencia para Trevor Philips?",
      options: ["Steven Ogg", "Ned Luke", "Shawn Fonteno"],
      answer: "Steven Ogg",
      image: "https://staticg.sportskeeda.com/editor/2021/10/685e2-16340702502235-800.jpg"
    },
    {
      question: "¿En qué ficticia ciudad está ambientado GTA 5?",
      options: ["Los Santos", "Liberty City", "Vice City"],
      answer: "Los Santos",
      image: "https://xombitgames.com/files/2014/03/Los-santos-por-la-noche.jpg"
    },
    {
      question: "¿Cuál es el nombre del hijo adolescente de Michael De Santa?",
      options: ["Jimmy", "Tracey", "Amanda"],
      answer: "Jimmy",
      image: "https://i.pinimg.com/736x/ad/f8/95/adf8958293d70efe2db8d978dd25da6e.jpg"
    },
    {
      question: "¿Cuál es el nombre del banco que los protagonistas intentan robar al inicio del juego?",
      options: ["Banco de Paleto Bay", "Fleeca Bank", "Banco de Los Santos"],
      answer: "Fleeca Bank",
      image: "https://i.ytimg.com/vi/AJRrmDCPLk8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_c_AW6PRV9Kj0_fbKJbhR3-42iw"
    },
    {
      question: "¿Cuál es el mejor amigo de Michael De Santa?",
      options: ["Al Capone", "Trevor Philips", "Franklin Clinton"],
      answer: "Trevor Philips",
      image: "https://staticg.sportskeeda.com/editor/2020/12/4b84e-16086265135593-800.jpg"
    },
    {
      question: "¿Cómo se llama la compañía de desarrollo de videojuegos que creó GTA 5?",
      options: ["Rockstar Games", "Ubisoft", "EA Sports"],
      answer: "Rockstar Games",
      image: "https://www.expreso.com.pe/wp-content/uploads/2023/11/GTA-VI.jpg"
    },
    {
      question: "¿Qué vehículo se asemeja a un icónico DeLorean y permite viajar en el tiempo en el juego?",
      options: ["Zentorno", "Deluxo", "Infernus"],
      answer: "Deluxo",
      image: "https://staticg.sportskeeda.com/editor/2021/05/d9d39-16205579754407-800.jpg"
    },
    {
      question: "¿Qué actividad principal pueden realizar los jugadores en GTA Online?",
      options: ["Carreras de autos", "Jugar al golf", "Robar bancos"],
      answer: "Carreras de autos",
      image: "https://i.ytimg.com/vi/5OkG1HxpB6o/sddefault.jpg" 
    },
    {
      question: "¿Cuál es el nombre del barrio donde vive Franklin Clinton?",
      options: ["Grove Street", "Vinewood Hills", "Strawberry"],
      answer: "Strawberry",
      image: "https://i.ytimg.com/vi/ABYn7yG1tUQ/hqdefault.jpg"
    }
  ];
  
  let currentQuestion = 0;
  const questionText = document.getElementById('question-text');
  const questionImage = document.getElementById('question-image');
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const option3 = document.getElementById('option3');
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    questionImage.src = q.image;
    option1.textContent = q.options[0];
    option2.textContent = q.options[1];
    option3.textContent = q.options[2];
  }
  
  function checkAnswer(selectedOption) {
    const selectedAnswer = selectedOption.textContent;
    const correctAnswer = questions[currentQuestion].answer;
  
    if (selectedAnswer === correctAnswer) {
      alert("¡Respuesta correcta!");
    } else {
      alert("Respuesta incorrecta. La respuesta correcta es: " + correctAnswer);
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert("¡Juego terminado!");
      
    }
  }



  
  loadQuestion();
  option1.addEventListener('click', () => checkAnswer(option1));
  option2.addEventListener('click', () => checkAnswer(option2));
  option3.addEventListener('click', () => checkAnswer(option3));