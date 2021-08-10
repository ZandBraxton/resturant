const homePage = (() => {
        function testAlert() {
        console.log('test1')
    }

    function testAlert2() {
        console.log('test2')
    }
    return {testAlert, testAlert2}
})();




export default homePage;