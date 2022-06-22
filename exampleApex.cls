public with sharing class exampleApex {
    public exampleApex() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Project_Details__c> getDetails(){
        return[
        SELECT
        Project ID__c,
        Name
        FROM Project Details
            WITH SECURITY_ENFORCED
            LIMIT 2
        ];
    }
}
