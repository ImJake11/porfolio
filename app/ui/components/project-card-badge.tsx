
const ProjectCardBadge = ({ content }: { content: string }) => {
    return (
        <div
            className="opacity-0 h-fit w-fit rounded-[17px] border-[1px] border-[var(--secondary)] py-1 px-2 text-white text-[.8rem] hover:border-[var(--primary)] transition-all ease-in-out duration-200 hover:shadow-[inset_0px_0px_10px_var(--shadow-primary)]"
        >
            {content}
        </div>
    );
};

export default ProjectCardBadge;