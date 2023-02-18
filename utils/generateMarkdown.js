// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseString = ''

  if (license === 'apache') {
    licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'bsd') {
    licenseString = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license === 'MIT') {
    licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  return licenseString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

## Table of Contents
- [TITLE](#TITLE)
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Email](#Email)
- [Github](#Github)
- [License](#License)

  
## TITLE
- ${data.title}

## Description
- ${data.description}

## Installation
- ${data.instruction}

## Usage
- ${data.information}

## Contributing
- ${data.contribution}

## Tests
- ${data.testInstructions}

## Email
- ${data.email}

## Github
- ${data.github}

## License 
- ${renderLicenseBadge(data.license)}
    
`;
}

module.exports = generateMarkdown;
