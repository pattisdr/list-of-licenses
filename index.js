var fs = require('fs');

var lol = {
    NONE: {
        name: 'No license',
        text: 'Copyright {{year}} {{copyrightHolders}}',
        properties: ['year', 'copyrightHolders']
    },
    MIT: {
        name: 'MIT License',
        text: fs.readFileSync('./licenses/mit.txt').toString(),
        url: 'http://opensource.org/licenses/MIT',
        osiApproved: true,
        properties: ['year', 'copyrightHolders']
    },
    GPL2: {
        name: 'GNU General Public License (GPL) 2.0',
        text: fs.readFileSync('./licenses/gpl-2.0.txt').toString(),
        url: 'http://www.gnu.org/licenses/gpl-2.0.txt',
        osiApproved: true
    },
    GPL3: {
        name: 'GNU General Public License (GPL) 3.0',
        text: fs.readFileSync('./licenses/gpl-3.0.txt').toString(),
        url: 'http://www.gnu.org/licenses/gpl-3.0.txt',
        osiApproved: true
    },
    Apache2: {
        name: 'Apache License 2.0',
        text: fs.readFileSync('./licenses/apache-2.0.txt').toString(),
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        osiApproved: true
    },
    BSD2: {
        name: 'BSD 2-Clause "Simplified" License',
        text: fs.readFileSync('./licenses/bsd-2.0.txt').toString(),
        url: 'http://opensource.org/licenses/BSD-3-Clause',
        osiApproved: true,
        properties: ['year', 'copyrightHolders']
    },
    BSD3: {
        name: 'BSD 3-Clause "New"/"Revised" License',
        text: fs.readFileSync('./licenses/bsd-3.0.txt').toString(),
        url: 'http://opensource.org/licenses/BSD-3-Clause',
        osiApproved: true,
        properties: ['year', 'copyrightHolders']
    },
    LGPL2_1: {
        name: 'GNU Lesser General Public License (LGPL) 2.1',
        text: fs.readFileSync('./licenses/lgpl-2.1.txt').toString(),
        url: 'http://www.gnu.org/licenses/lgpl-2.1.txt',
        osiApproved: true
    },
    LGPL3: {
        name: 'GNU Lesser General Public License (LGPL) 3.0',
        text: fs.readFileSync('./licenses/lgpl-3.0.txt').toString(),
        url: 'http://www.gnu.org/licenses/lgpl-3.0.txt',
        osiApproved: true
    },
    CC0: {
        name: 'CC0 1.0 Universal',
        text: fs.readFileSync('./licenses/cc0-1.0.txt').toString(),
        url: 'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
        osiApproved: false
    },
    CCBY: {
        name: 'CC-By Attribution 4.0 International',
        text: fs.readFileSync('./licenses/ccby-4.0.txt').toString(),
        url: 'https://creativecommons.org/licenses/by/4.0/legalcode',
        osiApproved: false
    },
    CC-BY-NC-ND: {
        name: 'CC-By Attribution-NonCommercial-NoDerivatives 4.0 International',
        text: fs.readFileSync('./licenses/ccbyncnd-4.0.txt'),
        url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode',
        osiApproved: false
    },
    CC-BY-SA4_0: {
        name: 'CC-By Attribution-ShareAlike 4.0 International',
        text: fs.readFileSync('./licenses/ccbysa-4.0.txt'),
        url: 'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
        osiApproved: false
    },
    Artistic2: {
        name: 'Artistic License 2.0',
        text: fs.readFileSync('./licenses/artistic-2.0.txt').toString(),
        url: 'http://www.perlfoundation.org/attachment/legal/artistic-2_0.txt',
        osiApproved: true
    },
    Eclipse1: {
        name: 'Eclipse Public License 1.0',
        text: fs.readFileSync('./licenses/eclipse-1.0.txt').toString(),
        url: 'http://www.eclipse.org/legal/epl-v10.html',
        osiApproved: true
    },
    Mozilla2: {
        name: 'Mozilla Public License 2.0',
        text: fs.readFileSync('./licenses/mozilla-2.0.txt').toString(),
        url: 'https://www.mozilla.org/MPL/2.0/',
        osiApproved: true
    },
    AFL3: {
        name: 'Academic Free License (AFL) 3.0',
        text: fs.readFileSync('./licenses/afl-3.0.txt').toString(),
        url: 'http://opensource.org/licenses/AFL-3.0',
        osiApproved: true
    },
    OTHER: {
        name: 'Other',
        text: 'Please see the file named license.txt in the OSF Storage of this project.'
    }
};

// h/t: http://stackoverflow.com/questions/13696148/node-js-create-folder-or-use-existing
var mkdirSync = function(path) {
    try {
        fs.mkdirSync(path);
    } catch (e) {
        if (e.code != 'EEXIST') throw e;
    }
};

mkdirSync('./dist');
fs.writeFile('./dist/list-of-licenses.json', JSON.stringify(lol));
