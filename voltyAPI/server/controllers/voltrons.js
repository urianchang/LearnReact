var mongoose = require('mongoose');
var Voltron = mongoose.model('Voltron');

module.exports = {
  index: function(req, res) {
    Voltron.find({}, function(err, voltrons) {
      if (err) {
          res.json(err);
      } else {
          res.json(voltrons);
      }
    });
  },
  create: function(req, res) {
    var voltron = new Voltron({
      company_long_name: req.body.company_long_name,
      company_short_name: req.body.company_short_name,
      customer_email: req.body.customer_email,
      customer_full_name: req.body.customer_full_name,
      region: req.body.region,
      sightmachine_owner_email: req.body.sightmachine_owner_email,
    });
    voltron.save(function(err, voltron) {
      if(err){
        res.json(err);
      } else {
        res.json({
          execution_id: voltron._id,
          status: "Assembling",
        });
      }
    });
  },
  delete: function(req, res) {
    Voltron.remove({_id: req.params.id}, function(err) {
        if (err) {
            res.json(err);
        } else {
            res.json("Successfully deleted");
        }
    });
  },
  status: function(req, res) {
    console.log("Which task:", req.params.id);
    const buildStatus = {
        "action": {
            "ref": "voltron.create-ma-service-environment"
        },
        "context": {
            "user": "st2admin"
        },
        "end_timestamp": "2017-08-16T05:43:24.149404Z",
        "id": "5993db0caa1d2800da606ef2",
        "liveaction": {
            "action": "voltron.create-ma-service-environment",
            "action_is_workflow": true,
            "callback": {},
            "id": "5993db0caa1d2800da606ef1",
            "parameters": {
                "namespace": "joshtest1",
                "service_environment_id": 1
            },
            "runner_info": {
                "hostname": "15d8fa4f9830",
                "pid": 118
            }
        },
        "parameters": {
            "namespace": "joshtest1",
            "service_environment_id": 1
        },
        "result": {
            "extra": {
                "state": "SUCCESS",
                "state_info": null
            },
            "tasks": [
                {
                    "created_at": "2017-08-16 05:41:34",
                    "id": "2e8cfbbc-824c-49aa-a884-d436cf37ed54",
                    "input": null,
                    "name": "create_namespace",
                    "published": {},
                    "result": {},
                    "state": "SUCCESS",
                    "state_info": null,
                    "updated_at": "2017-08-16 05:41:41",
                    "workflow_execution_id": "87de79a6-2de3-4fc4-b734-e85d3b9466e0",
                    "workflow_name": "voltron.create-ma-service-environment.main"
                },
                {
                    "created_at": "2017-08-16 05:41:41",
                    "id": "18251b30-be6d-456a-961a-ccc9fb1e4d67",
                    "input": null,
                    "name": "setup_ma_common",
                    "published": {},
                    "result": {},
                    "state": "SUCCESS",
                    "state_info": null,
                    "updated_at": "2017-08-16 05:42:26",
                    "workflow_execution_id": "87de79a6-2de3-4fc4-b734-e85d3b9466e0",
                    "workflow_name": "voltron.create-ma-service-environment.main"
                },
                {
                    "created_at": "2017-08-16 05:41:41",
                    "id": "54d3b900-1c38-4896-9d85-91f255f53b85",
                    "input": null,
                    "name": "setup_postgresql",
                    "published": {},
                    "result": {},
                    "state": "SUCCESS",
                    "state_info": null,
                    "updated_at": "2017-08-16 05:42:24",
                    "workflow_execution_id": "87de79a6-2de3-4fc4-b734-e85d3b9466e0",
                    "workflow_name": "voltron.create-ma-service-environment.main"
                },
                {
                    "created_at": "2017-08-16 05:41:41",
                    "id": "b748b140-d1ae-4244-bdbe-b154c0111c86",
                    "input": null,
                    "name": "setup_rabbitmq",
                    "published": {},
                    "result": {},
                    "state": "SUCCESS",
                    "state_info": null,
                    "updated_at": "2017-08-16 05:42:25",
                    "workflow_execution_id": "87de79a6-2de3-4fc4-b734-e85d3b9466e0",
                    "workflow_name": "voltron.create-ma-service-environment.main"
                },
                {
                    "created_at": "2017-08-16 05:41:42",
                    "id": "d280b352-b79a-4d7c-8689-c3dcf2fad9a0",
                    "input": null,
                    "name": "setup_mongodb",
                    "published": {},
                    "result": {},
                    "state": "SUCCESS",
                    "state_info": null,
                    "updated_at": "2017-08-16 05:42:25",
                    "workflow_execution_id": "87de79a6-2de3-4fc4-b734-e85d3b9466e0",
                    "workflow_name": "voltron.create-ma-service-environment.main"
                },
                {
                    "created_at": "2017-08-16 05:42:24",
                    "id": "99256e87-1856-43eb-a431-7d1f722770fb",
                    "input": null,
                    "name": "setup_ma",
                    "published": {},
                    "result": {},
                    "state": "SUCCESS",
                    "state_info": null,
                    "updated_at": "2017-08-16 05:42:57",
                    "workflow_execution_id": "87de79a6-2de3-4fc4-b734-e85d3b9466e0",
                    "workflow_name": "voltron.create-ma-service-environment.main"
                }
            ]
        },
        "start_timestamp": "2017-08-16T05:41:32.743801Z",
        "status": "succeeded"
    }
    // let addOne = parseInt(req.params.id, 10) + 1;
    // console.log(addOne);
    let idx = parseInt(req.params.id);
    res.json({
      taskUpdate: buildStatus['result']['tasks'][idx],
    });
  }
}
