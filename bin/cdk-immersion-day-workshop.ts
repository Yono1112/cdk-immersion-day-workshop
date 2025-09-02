#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkImmersionDayWorkshopStack } from '../lib/cdk-immersion-day-workshop-stack';

const app = new cdk.App();
new CdkImmersionDayWorkshopStack(app, 'CdkImmersionDayWorkshopStack');
