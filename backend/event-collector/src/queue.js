const { Queue, Worker } = require('bullmq');
const {saveEventData, identifyUser, createNewRecordingInstance, saveRecording} = require('./queries')
const IORedis = require('ioredis');

// Create a new connection in every instance
const fusionQueue = new Queue('allQueue', { connection: new IORedis(process.env.REDIS_URL)});

const fusionWorker = new Worker('allQueue', async (job)=>{
  if(job.name === 'eventData') {
    saveEventData(job.data);
  } else if(job.name === 'userData') {
    identifyUser(job.data);
  } else if(job.name === 'createSessionData') {
    createNewRecordingInstance(job.data);
  } else if(job.name === 'sessionRecordingData') {
    saveRecording(job.data);
  }
}, { connection: new IORedis(process.env.REDIS_URL)});

module.exports = {
  fusionQueue,
  fusionWorker
}