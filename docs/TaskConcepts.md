# Task Concepts

Task: A task is a unit of work such as 'write object to datastore' or 'send an e-mail'


## Push Queue

**Definition**:
The queue pushes tasks directly to workers as soon as they become available.

**Behavior**:
Workers are passive; they receive tasks when the system decides.

**Pros**:
- Lower latency — tasks are processed ASAP.
- Good for real-time workloads.

**Cons**:
- Harder to scale — you must manage backpressure and worker overload.
- Risk of overwhelming slow consumers.

**Example Use Case**:
- Real-time notifications
- Webhooks

## Pull Queue
**Definition**:
Workers pull tasks from the queue when they're ready to process.

**Behavior**:
Workers are active — they request tasks.

**Pros**:
- Easier to scale horizontally — just add more workers.
- More control over task rate (good for rate-limiting, backoff strategies).

**Cons**:
- Slightly higher latency if worker polling interval is slow.
- More complex worker logic.

**Example Use Case**:
- Background job processing (e.g. sending emails, resizing images)
- Worker systems like Celery, Sidekiq, or Golang workers with Redis/Kafka
