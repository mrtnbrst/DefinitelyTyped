import { ComponentType, JSX } from "react";

declare namespace BlockList {
    interface Props {
        className?: string | undefined;
        /**
         * A 'render prop' function that can be used to customize the block's appender.
         */
        renderAppender?(): JSX.Element;
        rootClientId?: string | undefined;
    }
}
declare const BlockList: ComponentType<BlockList.Props>;

export default BlockList;
