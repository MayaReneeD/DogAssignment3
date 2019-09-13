//get data from api
function getAPIData(dogBreed, callback) {
    let settings = {
      url:`https://dog.ceo/api/breed/${dogBreed}/images`,
      dataType: 'json',
      success: callback,
    }
    $.ajax(settings);
  }
  //display results
  function displayResults(data) {
    console.log(data.message[0]);
    $('.js-search-results').prop('hidden', false).html(`<img src="${data.message[0]}">`);
  }
  
  //get use submit information, event listener
  function userSubmit() {
    $('button').on('click', function(event) {
      event.preventDefault();
      let dogBreed = $('.js-query').val();
      if (dogBreed === '') {
        alert('Please Enter Dog Breed');
      }
      getAPIData(dogBreed, displayResults);
    });
  }
  
  $(userSubmit);