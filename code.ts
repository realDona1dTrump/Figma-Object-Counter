const num = figma.currentPage.selection.length

if (num > 0) {

    const suf = (num >= 2) ? ' objects.' : ' object.';

    const sum = num.toString()

    figma.notify('You have selected ' + sum + suf, { timeout: 3000 })   //Unit:ms

    figma.closePlugin()
} 

else {

    figma.notify("You have not selected any objects!", { timeout: 3000 })

    figma.closePlugin()

}


