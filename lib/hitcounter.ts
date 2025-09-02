import { IFunction } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";


export interface HitCounterProps {
    downstream: IFunction;
}

export class HitCounter extends Construct {
    constructor(scope: Construct, id: string, props: HitCounterProps) {
        super(scope, id);
        
        // Add your code here
    }
}