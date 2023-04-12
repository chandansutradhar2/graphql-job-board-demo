import { Job, Company } from "./db.js";

export const resolvers = {
  Query: {
    job: (root, { id }) => {
      console.log( id );
      return Job.findById(id);
    },
    jobs: async () => Job.findAll(),
    hello: () => "Hello World",
    companies: async () => Company.findAll(),
  },

  Job: {
    company: async (job) => {
      console.log(job);
      return Company.findById(job.companyId);
    },
  },
};
