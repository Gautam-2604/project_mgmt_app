const { projects, clients} = require('../sampleData.js')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} = require('graphql')

//Mongoose Models
const Project= require('../models/Project.js');
const Client= require('../models/Client.js');

//Client Type
const clientType= new GraphQLObjectType({
    name:'Client',
    fields:()=>({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        email:{type: GraphQLString},
        phone:{type: GraphQLString},
        
    })
})
//Project Type
const projectType= new GraphQLObjectType({
    name:'Project',
    fields:()=>({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        description:{type: GraphQLString},
        status:{type: GraphQLString},
        client:{
            type: clientType,
            resolve(parent, args){
                return clients.findById(parent.clientId)
            }
        }
    })
})

const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        clients:{
            type: new GraphQLList(clientType),
            resolve(parent, args){
                return Client.find(args.id);
            }
        },
        client:{
            type: clientType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return Client.findById()
            }
        },
        projects:{
            type: new GraphQLList(projectType),
            resolve(parent, args){
                return Project.find();
            }
        },
        project:{
            type: projectType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return Project.findById(args.id)
            }
        }
        
    }
})

module.exports= new GraphQLSchema({
    query: RootQuery,
})