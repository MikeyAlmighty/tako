# Tako

![Gopher](/attachments/gopher.png)
*Image credit: [Renée French](https://reneefrench.com/)*

A lightweight and efficient **task queue** implemented in [Go](https://go.dev/).

Supports **concurrent task processing**, customizable **worker pools**, and **error handling**—ideal for background job execution and async workflows.

## Architecture

```
+-------------------------+
|       React Frontend    |
|  - Dashboard UI         |
|  - Live worker/job view |
+-----------▲-------------+
            |
            | REST API / WebSockets
            ▼
+-------------------------+
|        Go Backend       |
|  - Task queue logic     |
|  - Worker pool          |
|  - Job tracking state   |
|  - REST / WS server     |
+-------------------------+
```



