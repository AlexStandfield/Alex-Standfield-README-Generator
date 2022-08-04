const licenses = [
  {
      name: 'GNU AFFERO GENERAL PUBLIC LICENSE',
      notice: `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.`,
      badge: 'https://img.shields.io/badge/license-GNU%20AGPLv3-green',
      link: 'https://spdx.org/licenses/AGPL-3.0-or-later.html'
  },
  {
      name: 'GNU GENERAL PUBLIC LICENSE',
      notice: `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.`,
      badge: 'https://img.shields.io/badge/license-GNU%20GPLv3-green',
      link: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  {
      name: 'GNU LESSER GENERAL PUBLIC LICENSE',
      notice: `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.`,
      badge: 'https://img.shields.io/badge/license-GNU%20LGPLv3-green',
      link: 'https://spdx.org/licenses/LGPL-3.0-or-later.html'
  },
  {
      name: 'Mozilla Public License',
      notice: `Each Contributor hereby grants You a world-wide, royalty-free,
      non-exclusive license:
      
      (a) under intellectual property rights (other than patent or trademark)
          Licensable by such Contributor to use, reproduce, make available,
          modify, display, perform, distribute, and otherwise exploit its
          Contributions, either on an unmodified basis, with Modifications, or
          as part of a Larger Work; and
      
      (b) under Patent Claims of such Contributor to make, use, sell, offer
          for sale, have made, import, and otherwise transfer either its
          Contributions or its Contributor Version.`,
      badge: 'https://img.shields.io/badge/license-MPL--2.0-green',
      link: 'https://spdx.org/licenses/MPL-2.0.html'
  },
  {
      name: 'Apache License',
      notice: `Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.`,
      badge: 'https://img.shields.io/badge/license-Apache--2.0-green',
      link: 'https://spdx.org/licenses/Apache-2.0.html'
  },
  {
      name: 'MIT License',
      notice: `Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.`,
      badge: 'https://img.shields.io/badge/license-MIT-green',
      link: 'https://spdx.org/licenses/MIT.html'
  },
  {
      name: 'Boost Software License',
      notice: `Permission is hereby granted, free of charge, to any person or organization
      obtaining a copy of the software and accompanying documentation covered by
      this license (the "Software") to use, reproduce, display, distribute,
      execute, and transmit the Software, and to prepare derivative works of the
      Software, and to permit third-parties to whom the Software is furnished to
      do so, all subject to the following:
      
      The copyright notices in the Software and this entire statement, including
      the above license grant, this restriction and the following disclaimer,
      must be included in all copies of the Software, in whole or in part, and
      all derivative works of the Software, unless such copies or derivative
      works are solely in the form of machine-executable object code generated by
      a source language processor.`,
      badge: 'https://img.shields.io/badge/license-BSL--1.0-green',
      link: 'https://spdx.org/licenses/BSL-1.0.html'
  },
  {
      name: 'The Unlicense',
      notice: `Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.`,
      badge: 'https://img.shields.io/badge/license-Unlicense-green',
      link: 'https://spdx.org/licenses/Unlicense.html'
  },
]
let licenseBadges = [];
let licenseLinks = [];
let licenseNotices = [];
let licenseSection = '';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licensesArr) {
  licensesArr.forEach(license => {
    for(let i = 0; i < licenses.length; i++) {
      if (license === licenses[i].name) {
        licenseBadges.push('![' + licenses[i].name +  '](' + licenses[i].badge + ')');
      }
    }
  })
  return licenseBadges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licensesArr) {
  licensesArr.forEach(license => {
    for(let i = 0; i < licenses.length; i++) {
      if (license === licenses[i].name) {
        licenseLinks.push(licenses[i].link + ' ');
      }
    }
  })
  return licenseLinks;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensesArr) {
  licensesArr.forEach(license => {
    for(let i = 0; i < licenses.length; i++) {
      if (license === licenses[i].name) {
        licenseNotices.push(licenses[i].notice) + ' ';
      }
    }
  })
  return licenseNotices;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.descriptionQuestion1} ${data.descriptionQuestion2} ${data.descriptionQuestion3} ${data.descriptionQuestion4} ${data.descriptionQuestion5}

${licenseBadges}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${licenseNotices}
${licenseLinks}

## GitHub
${data.github}

## Email
${data.email}
`;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection}