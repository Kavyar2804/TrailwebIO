describe('launch', ()=>{

    it('browser', async()=>{

        await browser.url('https://www.google.com')
        await browser.maximizewindow()
        await browser.pause(5000)
    })

})