var nameSpace = angular.module("PhonebookApp", []);

nameSpace.controller("PhonebookFunction", ['$scope','$http', '$window', 

	function($scope, $http, $window)
		{    
			$http.get('js/seed.json').success (function(data){
				$scope.PhonebookVariable = data;
				console.log(data);
			}); 

			//View Button to see everything but avatar in pop-up window
			$scope.view = '';
				$scope.doView = function(view) 
				{
	        		$window.alert(view);
	      		};

	      	//Create new user by pressing button that feeds table free-text field values




			$scope.counter = 11;
			//$scope.rows =[]
			//$scope.rows = [{'avatar': $scope.avatar, 'name': $scope.name, 'id': $scope.id, 'phonenumber': $scope.phonenumber, 'email': $scope.email, 'birthday': $scope.birthday}];
			$scope.rows = [{avatar: 'TestAvatar', name:'TestName', id:'10-TestID', phone:'TestPhone', email:'TestEmail', birthday:'TestBirthday'}];
			$scope.addRow = function()
				{
					$scope.counter++;
					//$scope.rows.push($scope.avatar, $scope.name, $scope.id, $scope.phone, $scope.email, $scope.birthday);
					$scope.rows.push({'avatar':$scope.avatar, 'name':$scope.name, 'id':$scope.id, 'phone':$scope.phone, 'email':$scope.email, 'birthday':$scope.birthday});
					$scope.avatar='';
					$scope.name='';
					$scope.id='';
					$scope.phone='';
					$scope.email='';
					$scope.birthday='';
					
				}

			$scope.newField = {};
          	$scope.editing = false;
			$scope.editAppKey = function(field) 
				{
		        $scope.editing = $scope.rows.indexOf(field);
		        $scope.newField = angular.copy(field);
    			};
    
    		$scope.saveField = function(index){
	        	if ($scope.editing !== false)
	        		{
	            	$scope.rows[$scope.editing] = $scope.newField;
	            	$scope.editing = false;
	        		}       
    			};

    			$scope.cancel = function(index) {
			        if ($scope.editing !== false) {
			            $scope.rows[$scope.editing] = $scope.newField;
			            $scope.editing = false;
			        }       
			    };

		}

	]

);


  