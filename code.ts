var num = figma.currentPage.selection.length

if (num > 0) {

    var suf = (num >= 2) ? ' objects.' : ' object.';

    var sum = num.toString()

    figma.notify('You have selected ' + sum + suf, { timeout: 2500 })   //Unit:ms

    figma.closePlugin()
} 

else {

    figma.notify("You haven't selected any objects!", { timeout: 2500 })

    figma.closePlugin()

}


