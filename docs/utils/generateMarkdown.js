// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-yellow.svg)`
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `
  [License-Link](../LICENSE)
    `;
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `## License
  Notice: This application is licensed under ${license}
  ${renderLicenseLink(license)}
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  * ${data.motiv}
  * ${data.why}
  * ${data.problem}
  * ${data.standout}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  
  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contrib}

  ## Test

  ${data.test}
  
  ## Questions

  ${data.questions}

  * Github Profile: [${data.username}](https://github.com/${data.username})
  * ${data.email}
  
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
