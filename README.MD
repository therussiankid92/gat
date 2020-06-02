# gat
The Github Action Tester makes assertions over the outputs of github workflows or actions super simple.  
Bring the power of test automation to your actions and workflows: ```gat``` makes it easier for you to build and test reliable ci pipelines for your team.  
  
_btw: did you know :cat2: gat is cat in catalan?_    
  
## Usage  
### Input Variables     
```assertion```: Mandatory, assertion to be performed (eg should.be.true, equals).  
```expected```: Mandatory, the value outputed by your action/workflow. This shall be compared with the expected.  
```actual```: Mandatory, the value you expect your function to have. This would be compared against your actual     
   
### Supported Assertions  
You can check a list of supported assertion in [here](src/domain/assertions.js)  
   
### Example   
Let's say we want to test that [this action](https://github.com/marketplace/actions/tf-siesta) always returns false in some given conditions.  
A test would look like:  
```
name: False when calendar not busy  
on:  
  push:  
  pull_request:  
    branches:  
      - master  
jobs:  
  test:  
    runs-on: ubuntu-latest  
    name: test-action  
    steps:  
     - name: Get Non-Busy Calendar    
       uses: Typeform/siesta@v1  
       id: siesta  
       with:  
         google-credentials: ${{ secrets.siesta_google_credentials }}  
         google-token: ${{ secrets.siesta_google_token }}  
         google-calendar-id: ${{ secrets.siesta_google_calendar_id }}  
     - name: Assert Result  
        uses: therussiankid92/gat  
        id: gat  
        with:  
          assertion: should.equal  
          expected: false  
          actual: ${{steps.siesta.outputs.calendar-busy}}  
```    
  
Place it in ```.github/workflows/``` and it would run as frequent as you configure it.   
Easy, right? ```gat``` can be used in even more complex workflows. Get creative and try it out!   


## Contributing  
All code should pass tests, as well as be well documented. Use a fork and PR it to this repo.   
  
## Developing  
  
### Prerequisites  

- Node.js  
- Yarn  

### Installation  

To install the project dependencies:  

```bash  
yarn  
```  

Copy the contents of the `.env.dist` file into a new file called `.env`  
and fill in the necessary variables with your own variables.  

### How to run it  
```bash  
yarn start  
```  

### How to run tests  
```bash  
yarn test  
```  
### How to distribute  
Github actions requires all the package dependencies in the repo to run the JavaScript code.  
We prefer to distribute our code and modules into a single file: ```dist/index.js```. To do that, run: 
```bash
yarn distribute
```
