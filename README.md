# Course Management CLI Tool

This is an interactive CLI tool to manage your courses. It provides two commands: `add` and `list`. The `add` command allows you to add new courses by answering a series of questions, and the `list` command displays a list of all the courses you have added.

## Prerequisites

- Node.js installed on your machine
- NPM package manager

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/course-management-cli.git
   ```

2. Navigate to the project directory:
   ````
   cd course-management-cli
   ```

3. Install the dependencies:
   ````
   npm install
   ```

## Usage

To use the CLI tool, open your terminal or command prompt and navigate to the project directory. Then, you can run the following commands:

### Add a Course

To add a new course, use the following command and answer the prompted questions:
```
node index.js add
```

### List Courses

To list all the courses you have added, use the following command:
```
node index.js list
```

## Libraries Used

This project utilizes the following npm libraries:

- [Commander](https://www.npmjs.com/package/commander): A lightweight command-line framework for building CLI applications.
- [Inquirer](https://www.npmjs.com/package/inquirer): A collection of common interactive command-line user interfaces.

Please make sure to install the required dependencies by running `npm install` before using the CLI tool.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize and enhance the CLI tool according to your specific needs. If you have any questions or suggestions, please feel free to reach out.

Happy course management!
