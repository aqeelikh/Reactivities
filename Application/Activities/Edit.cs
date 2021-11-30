using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {

            public Activity Activity { get; set; }

        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.mapper = mapper;
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                var activity = await context.Activities.FindAsync(request.Activity.Id);

                /* Map the activity that we got from the request to the activity that we have in context(our database)
                by using AutoMapper we don't have to add all of the object attribute AutoMapper will handle it */
                mapper.Map(request.Activity,activity);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}