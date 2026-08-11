// ==========================================
// ALLIED E-BOOK READING TIMER
// ==========================================

import {
    auth,
    db,
    collection,
    addDoc,
    serverTimestamp
} from "./firebase.js";


// ==========================================
// CHAPTER INFORMATION
// ==========================================

// Each chapter page will set these values
// before loading this script.

const bookName =
    window.BOOK_NAME || "C Programming";

const chapterName =
    window.CHAPTER_NAME || "Unknown Chapter";


// ==========================================
// TIMER VARIABLES
// ==========================================

let elapsedSeconds = 0;

let timerInterval = null;

let isRunning = false;

let startedAt = null;


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const timerDisplay =
    document.getElementById("readingTimer");

const startButton =
    document.getElementById("startReading");

const pauseButton =
    document.getElementById("pauseReading");

const stopButton =
    document.getElementById("stopReading");

const timerMessage =
    document.getElementById("timerMessage");


// ==========================================
// CHECK ELEMENTS
// ==========================================

if (
    !timerDisplay ||
    !startButton ||
    !pauseButton ||
    !stopButton
) {

    console.error(
        "Reading timer HTML elements are missing."
    );

}


// ==========================================
// FORMAT TIME
// ==========================================

function formatTime(totalSeconds) {

    const hours =
        Math.floor(
            totalSeconds / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;


    return (

        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")

    );

}


// ==========================================
// UPDATE TIMER DISPLAY
// ==========================================

function updateTimer() {

    if (!timerDisplay) {
        return;
    }


    timerDisplay.textContent =
        formatTime(elapsedSeconds);

}


// ==========================================
// START READING
// ==========================================

startButton.addEventListener(
    "click",
    () => {

        if (isRunning) {

            return;

        }


        // First time starting
        if (!startedAt) {

            startedAt =
                new Date();

        }


        isRunning = true;


        timerInterval =
            setInterval(
                () => {

                    elapsedSeconds++;

                    updateTimer();

                },
                1000
            );


        timerMessage.textContent =
            "Reading timer is running. 📖";


        startButton.disabled =
            true;

        pauseButton.disabled =
            false;

    }
);


// ==========================================
// PAUSE READING
// ==========================================

pauseButton.addEventListener(
    "click",
    () => {

        if (!isRunning) {

            return;

        }


        clearInterval(
            timerInterval
        );


        timerInterval =
            null;


        isRunning =
            false;


        timerMessage.textContent =
            "Reading timer paused. ⏸️";


        startButton.disabled =
            false;

    }
);


// ==========================================
// STOP & SAVE
// ==========================================

stopButton.addEventListener(
    "click",
    async () => {


        // Stop timer if running

        if (isRunning) {

            clearInterval(
                timerInterval
            );

            timerInterval =
                null;

            isRunning =
                false;

        }


        // Make sure some time was recorded

        if (elapsedSeconds <= 0) {

            timerMessage.textContent =
                "Please start the reading timer first.";

            return;

        }


        // Check Firebase user

        const user =
            auth.currentUser;


        if (!user) {

            timerMessage.textContent =
                "Please login before saving reading time.";

            return;

        }


        try {


            stopButton.disabled =
                true;


            timerMessage.textContent =
                "Saving reading time... ⏳";


            const endedAt =
                new Date();


            const durationMinutes =
                Math.floor(
                    elapsedSeconds / 60
                );


            // ==================================
            // SAVE TO FIRESTORE
            // ==================================

            await addDoc(

                collection(
                    db,
                    "readingSessions"
                ),

                {

                    userId:
                        user.uid,

                    book:
                        bookName,

                    chapter:
                        chapterName,

                    durationSeconds:
                        elapsedSeconds,

                    durationMinutes:
                        durationMinutes,

                    startedAt:
                        startedAt,

                    endedAt:
                        endedAt,

                    createdAt:
                        serverTimestamp()

                }

            );


            timerMessage.textContent =
                "Reading time saved successfully! ✅";


            stopButton.disabled =
                false;


        }

        catch (error) {


            console.error(
                "Reading time error:",
                error
            );


            timerMessage.textContent =
                "Unable to save reading time. Please try again.";


            stopButton.disabled =
                false;

        }

    }
);


// ==========================================
// INITIAL DISPLAY
// ==========================================

updateTimer();