/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Workflow, Process, Project } from "@prisma/client";

export class WorkflowServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WorkflowCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowCountArgs>
  ): Promise<number> {
    return this.prisma.workflow.count(args);
  }

  async findMany<T extends Prisma.WorkflowFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowFindManyArgs>
  ): Promise<Workflow[]> {
    return this.prisma.workflow.findMany(args);
  }
  async findOne<T extends Prisma.WorkflowFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowFindUniqueArgs>
  ): Promise<Workflow | null> {
    return this.prisma.workflow.findUnique(args);
  }
  async create<T extends Prisma.WorkflowCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowCreateArgs>
  ): Promise<Workflow> {
    return this.prisma.workflow.create<T>(args);
  }
  async update<T extends Prisma.WorkflowUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowUpdateArgs>
  ): Promise<Workflow> {
    return this.prisma.workflow.update<T>(args);
  }
  async delete<T extends Prisma.WorkflowDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowDeleteArgs>
  ): Promise<Workflow> {
    return this.prisma.workflow.delete(args);
  }

  async findProcesses(
    parentId: string,
    args: Prisma.ProcessFindManyArgs
  ): Promise<Process[]> {
    return this.prisma.workflow
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .processes(args);
  }

  async getProject(parentId: string): Promise<Project | null> {
    return this.prisma.workflow
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }
}
