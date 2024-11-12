<h1 align="center">🐍 Sidewinder</h1>
<p align="center">
  <b>A simple application to create blind CVs from normalized JSON data</b>
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/skorupaw/sidewinder" alt="License">
  <img src="https://img.shields.io/github/stars/skorupaw/sidewinder" alt="Stars">
  <img src="https://img.shields.io/github/issues/skorupaw/sidewinder" alt="Issues">
</p>

---

## 🌟 About Sidewinder

**Sidewinder** is a lightweight tool designed to generate blind (anonymous) CVs from structured JSON data. This app streamlines the process of anonymizing resumes, making it perfect for recruitment processes where unbiased candidate selection is essential.

---

## ✨ Features

- 📝 **Create blind CVs** from structured JSON input
- 📊 **Supports normalized data** to ensure easy integration
- ⚙️ **Cross-platform compatibility** for Windows, Linux, and macOS
- 🔧 **Built with Bun, TypeScript, and Drizzle ORM** for fast and efficient handling

---

## 🚀 Getting Started

```bash
curl --location 'localhost:55015/template'
```

```bash
curl --location 'localhost:55015/blind' \
--header 'Content-Type: application/json' \
--data '{
    "name": "John Doe",
    "position": ".NET Developer",
    "languages": [
        "English - Native",
        "Spanish - B2"
    ],
    "skills": [
        "Data Structures",
        "Technical Discussions",
        "Software Implementation",
        "Full-Stack Development",
        "Communication",
        "JavaScript",
        "NoSQL",
        "Software Infrastructure",
        ".NET Framework",
        "Elastic Stack (ELK)",
        "Elasticsearch",
        "ASP.NET Core",
        "Microsoft SQL Server"
    ],
    "sections": [
        {
            "title": "Executive summary",
            "segments": [
                {
                    "text": "John is an experienced Software Engineer with a strong skill set and 4 years of experience in .NET, Elasticsearch, Microservices, and a deep knowledge of both SQL and No-SQL databases. His passion lies in crafting efficient algorithms for complex tasks and optimizing software systems for scalability and performance."
                }
            ]
        },
        {
            "title": "Work Experience",
            "segments": [
                {
                    "title": "Senior Software Engineer",
                    "subtitle": "01.2022 - present",
                    "list": [
                        "Implemented app migration from .NET Framework to .NET 6",
                        "Implemented Database migration from EDMX model to Fluent API syntax, achieving a 30% reduction in query execution times and a 20% decrease in database maintenance overhead",
                        "Improved search capabilities across millions of records, leading to a 50% reduction in search query response times",
                        "Designed and implemented a parallel pipeline functionality in C# to optimize the data loading process, accelerating data import times by 40%",
                        "Installed and maintained logging cluster using Elastic Search, Kibana, Logstash"
                    ],
                    "tags": [
                        "Data Structures",
                        "Technical Discussions",
                        "Software Implementation",
                        "Full-Stack Development",
                        "Communication",
                        "JavaScript",
                        "NoSQL",
                        "Software Infrastructure",
                        ".NET Framework",
                        "Elastic Stack (ELK)",
                        "Elasticsearch",
                        "ASP.NET Core",
                        "Microsoft SQL Server"
                    ]
                },
                {
                    "title": "Software Engineer",
                    "subtitle": "06.2020 - 01.2022",
                    "list": [
                        "Successfully implemented a highly optimized data loading algorithm capable of loading and processing 700 million records seamlessly using .NET DataFlow, SQL + ElasticSearch, and Kafka",
                        "Implemented a search engine with '\''search as you type'\'' functionality, synonym and fuzzy search capabilities to deliver results in real time",
                        "Designed and deployed a robust replication algorithm between the database and ElasticSearch using .NET and Kafka to maintain data consistency in real-time"
                    ],
                    "tags": [
                        "Data Structures",
                        "JavaScript",
                        "Software Design",
                        ".NET Framework",
                        "Elastic Stack (ELK)",
                        "Elasticsearch",
                        "ASP.NET Core",
                        "Microsoft SQL Server"
                    ]
                }
            ]
        },
        {
            "title": "Education",
            "segments": [
                {
                    "title": "Bachelor'\''s degree - Computer Software Engineering",
                    "subtitle": "Example University, City, Country"
                }
            ]
        }
    ]
}
'
```

Optional

```bash
curl -O -J http://localhost:55015/blind/<id>/file
```
