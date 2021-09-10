import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as EditIcon } from '../../assets/icons/pencil.svg';
import { setMemeData } from '../../store/actions/meme';
import { IState, Meme } from '../../store/types/meme';

const MAX_CHAR = 30;

const Title:React.FC<{ contentEditable?: boolean; }> = ({ children, contentEditable }):JSX.Element => {
    const [canEdit, setCanEdit] = useState(false);
    const { memeData } = useSelector((state: { memes:IState }) => state.memes);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const heading = useMemo(() => memeData?.heading||"", [memeData]);
    const dispatch = useDispatch();
    
    const handleEdit = useCallback(() => {
        setCanEdit(true);
        const node = titleRef.current;
        if(node){
            setTimeout(() => {
                node.focus();
            }, 0);
        }
    }, [titleRef]);

    const handleBlur = useCallback(() => {
        const node = titleRef.current;
        const value = node ? (node.textContent||"").trim(): "";
        if(node && !value) {
            toast("Meme Heading can not be Empty");
            node.textContent = value || "This is my Heading";
        };
        if(node && value && value.length > MAX_CHAR) {
            toast(`Meme Heading can not more than ${MAX_CHAR} characters`);
            node.textContent = (node.textContent || "").slice(0, MAX_CHAR);
        };
        setCanEdit(false);
        dispatch(setMemeData({ heading: node?.textContent || "This is my Heading" } as Meme));
    }, [dispatch, titleRef]);

    const handleKeyDown = useCallback((e:KeyboardEvent) => {
        if(e.key === "Escape" || e.key === "Enter") {
            handleBlur();
        }
    }, [handleBlur]);

    useEffect(() => {
        const node = titleRef.current;
        if(node)
        node.addEventListener('keydown',handleKeyDown);
        
        return () => {
            if(node)
            node.removeEventListener('keydown',handleKeyDown);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className={` text-xl text-primary-bold font-bold flex p-2 whitespace-nowrap overflow-hidden 
        ${canEdit ? 'w-11/12 break-all': ''}`} contentEditable={canEdit}
        onBlur={handleBlur} ref={titleRef}>
        {contentEditable ? (heading||children) : children}
        {!canEdit && contentEditable && <EditIcon className="w-6 h-6 ml-2 cursor-pointer" onClick={handleEdit} />}
    </div>;
};

export default Title;