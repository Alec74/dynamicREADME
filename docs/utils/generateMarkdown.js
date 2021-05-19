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
  [License](../LICENSE)
    `;
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `## ${license} License ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  * ${data.motiv}
  * ${data.why}
  * ${data.problem}
  * ${data.standout}
  * ${data.learn}
  
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

  ${renderLicenseSection(data.license)}

  ## Test

  ${data.test}
  
`;
}

module.exports = generateMarkdown;
