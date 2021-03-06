const Promise = require('bluebird');
const redis = require('redis');
const config = require('./environment');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(config.redis);

client.on('error', e => e);

module.exports = client;
