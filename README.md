[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## **Frappe Doctype Assignment Level-1**
This assignment aims at implementing basic features of frappe.Frappe is a full stack, batteries-included, web framework written in Python and Javascript and uses Postgresql .It is pretty generic and can be used to build database driven apps.
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [License](#license)
## Introduction
This assignment aims at implementing basic features and  get  uderstanding of functionalities of frappe framework.You can read about frappe below for more information.Here we are simply creating a Student Doctype which collects general information from student.To read more about docTypes and how to create them you can read about them in below Technology used section.
## Features
- Multiple fields with different data types to store data effectively in concise manner.
- **Personal Information**: Capture details such as first name, last name, date of birth, gender, nationality, and blood group.
- **Automatic Full Name**: The full name field automatically concatenates the first name, middle name, and last name for convenience.
- **Naming Series**: Choose from multiple naming series options to standardize student identification.
- **User Creation**: Create system users with corresponding roles - directly from the student record.
- **Joining Date**: The joining date field is prefilled with the current date for easy tracking.
- **Active Status**: Mark students as active or inactive with a checkbox field.
- **Email Validation**: Ensure email addresses entered are valid through built-in validation.

## Technologies Used

- Frappe
- Docker


## Prerequisites

Before running this project, ensure you have the following installed:

- #### Docker Desktop (Docker)
    Docker Desktop is a one-click-install application for your Mac, Linux, or Windows environment that lets you build, share, and run containerized applications and microservices.It provides a straightforward GUI (Graphical User Interface) that lets you manage your containers, applications, and images directly from your machine. Docker Desktop reduces the time spent on complex setups so you can focus on writing code. It takes care of port mappings, file system concerns, and other default settings, and is regularly updated with bug fixes and security updates.To Install Docker Desktop <a href="https://docs.docker.com/desktop/" alt="not found">Click Here</a>

- #### Frappe
    Frappe, pronounced fra-pay, is a full stack, batteries-included, web framework written in Python and Javascript with MariaDB as the database. It is the framework which powers ERPNext, is pretty generic and can be used to build database driven apps. To install latest version <a href="https://frappeframework.com/docs/user/en/introduction" alt="not found">Click Here</a>


## Installation
1. Install Docker desktop and open command prompt.
2. Inside command promt type this command
   ```bash
   docker pull ubuntu:22.04
   docker run -dt --name bench -p 8000:8000 ubuntu:22.04 /bin/bash
   ```
4. Next setup frappe framework, to setup <a href="https://wiki.nestorbird.com/wiki/install-frappe-v15">Click here</a>
5. Navigate to **Customization > DocType**
6. Create a new DocType named "Student".
7. Add the specified fields according to the provided instructions.
## Usage
1. open bench directory and inside that enable developer mode -
 ```bash
bench set-config -g developer_mode 1
  ```
2. start postgres service by running this command
   ```bash
   sudo service postgresql start
   ```
3. Start Bench with 2 commands
   ```bash
   bench use your_bench_name
   bench start
   ``` 
4. Access the "Student" module from the main menu.
5. Create new student records by filling in the required fields.
6. Optionally, utilize the "Create User" button to generate corresponding system users.
7. Save the record to store the student information in the database.


## Authors

- [@amanagnihotri1](https://www.github.com/amanagnihotri1)

