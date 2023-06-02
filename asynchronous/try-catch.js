
let success = true;

const performTask = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve() : reject(new Error('task not successful'));
    }, 2000);
  });
};

const successful = async () => {
  try {
    await performTask();
    console.log('task successful');
  } catch (error) {
    throw error;
  }
};

successful()
  .then(() => {
    console.log('All tasks completed successfully.');
  })
  .catch((error) => {
    console.error('Error occurred:', error.message);
  });




